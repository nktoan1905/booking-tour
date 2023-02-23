import db from '../models';

const tourServices = {
	createNewTour: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const newTour = await db.Tour.create({
					name: data.name,
					thumbnail: data.thumbnail,
					thumbnailName: data.thumbnailName,
					adultPrice: data.adultPrice,
					childPrice: data.childPrice,
					babyPrice: data.babyPrice,
					trailer: data.trailer,
					tourDetail: data.tourDetail,
					note: data.note,
					map: data.map,
					duration: data.duration,
					amount: data.amount,
				});
				if (newTour) {
					resolve({ status: true, message: 'Create new tour successfully' });
				} else {
					resolve({ status: false, message: 'Create tour failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	addCategory: async (tourId, categoryId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const category = await db.Category.findOne({ where: { id: categoryId }, raw: false });
				if (!category) {
					resolve({ status: false, message: 'Category not found' });
				}
				const isAdd = await tour.addCategory(category.id);
				if (isAdd) {
					resolve({ status: true, message: 'Add category successfully' });
				} else {
					resolve({ status: false, message: 'Add category failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	addService: async (tourId, serviceId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const service = await db.Service.findOne({ where: { id: serviceId }, raw: false });
				if (!service) {
					resolve({ status: false, message: 'Service not found' });
				}
				const isAdd = await tour.addService(service.id);
				if (isAdd) {
					resolve({ status: true, message: 'Add service successfully' });
				} else {
					resolve({ status: false, message: 'Add service failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	addPromotion: async (tourId, promotionId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const promotion = await db.Promotion.findOne({ where: { id: promotionId }, raw: false });
				if (!promotion) {
					resolve({ status: false, message: 'Promotion not found' });
				}
				const isAdd = await tour.addPromotion(promotion.id);
				if (isAdd) {
					resolve({ status: true, message: 'Add promotion successfully' });
				} else {
					resolve({ status: false, message: 'Add promotion failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	addCity: async (tourId, cityId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const city = await db.City.findOne({ where: { id: cityId }, raw: false });
				if (!city) {
					resolve({ status: false, message: 'City not found' });
				}
				const isAdd = await tour.addCity(city.id);
				if (isAdd) {
					resolve({ status: true, message: 'Add city successfully' });
				} else {
					resolve({ status: false, message: 'Add city failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	addDepentureDay: async (tourId, depentureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const depentureDay = await db.DepentureDay.findOne({ where: { id: depentureDayId }, raw: false });
				if (!depentureDay) {
					resolve({ status: false, message: 'Depenture day not found' });
				}
				const isAdd = await tour.addDepentureDay(depentureDay.id);
				if (isAdd) {
					resolve({ status: true, message: 'Add depenture day successfully' });
				} else {
					resolve({ status: false, message: 'Add depenture day failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removeCategory: async (tourId, categoryId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const category = await db.Category.findOne({ where: { id: categoryId }, raw: false });
				if (!category) {
					resolve({ status: false, message: 'Category not found' });
				}
				const isRemove = await tour.removeCategory(category.id);
				if (isRemove) {
					resolve({ status: true, message: 'Remove category successfully' });
				} else {
					resolve({ status: false, message: 'Category not found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removeService: async (tourId, serviceId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const serivce = await db.Serivce.findOne({ where: { id: serviceId }, raw: false });
				if (!serivce) {
					resolve({ status: false, message: 'Serivce not found' });
				}
				const isRemove = await tour.removeService(serivce.id);
				if (isRemove) {
					resolve({ status: true, message: 'Remove serivce successfully' });
				} else {
					resolve({ status: false, message: 'Serivce not found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removePromotion: async (tourId, promotionId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const promotion = await db.Promotion.findOne({ where: { id: promotionId }, raw: false });
				if (!promotion) {
					resolve({ status: false, message: 'Promotion not found' });
				}
				const isRemove = await tour.removePromotion(promotion.id);
				if (isRemove) {
					resolve({ status: true, message: 'Remove serivce successfully' });
				} else {
					resolve({ status: false, message: 'Serivce not found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removeCity: async (tourId, cityId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const city = await db.City.findOne({ where: { id: cityId }, raw: false });
				if (!city) {
					resolve({ status: false, message: 'City not found' });
				}
				const isRemove = await tour.removeCity(city.id);
				if (isRemove) {
					resolve({ status: true, message: 'Remove city successfully' });
				} else {
					resolve({ status: false, message: 'City not found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	removeDepentureDay: async (tourId, depentureDayId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const tour = await db.Tour.findOne({ where: { id: tourId }, raw: false });
				if (!tour) {
					resolve({ status: false, message: 'Tour not found' });
				}
				const depentureDay = await db.DepentureDay.findOne({ where: { id: depentureDayId }, raw: false });
				if (!depentureDay) {
					resolve({ status: false, message: 'Depenture Day not found' });
				}
				const isRemove = await tour.removeDepentureDay(depentureDay.id);
				if (isRemove) {
					resolve({ status: true, message: 'Remove depenture day successfully' });
				} else {
					resolve({ status: false, message: 'Depenture day not found' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTours: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const tours = await db.Tour.findAll({
					
					include: [
						{
							model: db.Category,
							as: 'categories',
						},
						{
							model: db.Service,
							as: 'services',
						},
						{
							model: db.Promotion,
							as: 'promotions',
						},
						{
							model: db.City,
							as: 'cities',
							include: [{ model: db.Country, as: 'countryInfo' }],
						},
						{
							model: db.DepartureDay,
							as: 'departureDays',
						},
					],
					nest: true,
					raw: true,
				});
				if (tours.length > 0) {
					resolve({ status: true, message: 'Get All Tours successfully', tours: tours });
				} else {
					resolve({ status: false, message: 'Get All Tours failed' });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
};
export default tourServices;
