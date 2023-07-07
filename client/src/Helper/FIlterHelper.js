import moment from "moment";
import dayjs from "dayjs";

export const getIndexOfValueFromOptions = (value, options) => {
  const res = options.findIndex((option) => option.value === value);
  return res;
};

export const getTourInCountry = (data) => {
  const res = data.map((item) => {
    const { tours, ...rest } = item;
    const toursInCountry = tours.filter(
      (item) => item.tourInfo.cityInfo.countryInfo.id === 1
    );
    return { ...rest, tours: toursInCountry };
  });
  return res;
};

export const getTourOurCountry = (data) => {
  const res = data.map((item) => {
    const { tours, ...rest } = item;
    const toursInCountry = tours.filter(
      (item) => item.tourInfo.cityInfo.countryInfo.id !== 1
    );
    return { ...rest, tours: toursInCountry };
  });
  return res;
};

export const filterOption = (tours, duration) => {
  if (duration === 0) {
    return tours;
  } else {
    switch (duration) {
      case 1:
        return tours.filter(
          (item) => item.tourInfo.duration >= 1 && item.tourInfo.duration <= 3
        );
      case 2:
        return tours.filter(
          (item) => item.tourInfo.duration >= 4 && item.tourInfo.duration <= 7
        );
      case 3:
        return tours.filter(
          (item) => item.tourInfo.duration >= 8 && item.tourInfo.duration <= 14
        );
      case 4:
        return tours.filter((item) => item.tourInfo.duration > 14);
      default:
        break;
    }
  }
};

export function mergeArrays(departureDays, tourDepartureDays) {
  const mergedArray = [];

  if (departureDays) {
    departureDays.forEach((departureDay) => {
      const { id, dayStart } = departureDay;
      const matchingTourDepartureDays =
        tourDepartureDays &&
        tourDepartureDays.filter(
          (tourDepartureDay) => tourDepartureDay?.dayStartId === id
        );

      if (matchingTourDepartureDays?.length > 0) {
        const mergedItems = matchingTourDepartureDays.map(
          (tourDepartureDay) => ({
            dayStartId: tourDepartureDay?.dayStartId,
            tourId: tourDepartureDay?.tourId,
            startPlace: tourDepartureDay?.startPlace,
            createdAt: tourDepartureDay?.createdAt,
            updatedAt: tourDepartureDay?.updatedAt,
            departureDay: {
              id,
              dayStart,
              status: departureDay?.status,
              createdAt: departureDay?.createdAt,
            },
          })
        );

        mergedArray.push(...mergedItems);
      }
    });
    return mergedArray;
  } else {
    return [];
  }
}

export function filterTour(filter, tourDepartureDays, tours, cities) {
  const { startPlaceId, endPlaceId, date, duration, inCountry, priceRange } =
    filter;
  const durations = [
    { label: "Tất cả", id: 0 },
    { label: "1 - 3 ngày", id: 1 },
    { label: "4 - 7 ngày", id: 2 },
    { label: "8 - 14 ngày", id: 3 },
    { label: "Trên 14 ngày", id: 4 },
  ];
  const newData = JSON.parse(JSON.stringify(tourDepartureDays));
  for (const tourDepartureDay of newData) {
    for (const tour of tourDepartureDay.tours) {
      const matchingTour = tours.find((t) => t.id === tour.tourId);
      if (matchingTour) {
        tour.tourInfo = matchingTour;
      }
    }
  }
  // Tìm theo ngày
  const isEqualDayStartTourDepartureDays = newData.find((item) =>
    dayjs(item.dayStart, "YYYY-MM-DD").isSame(dayjs(date, "DD-MM-YYYY"))
  );
  if (isEqualDayStartTourDepartureDays?.length === 0) return [];
  const startPlace = cities.find((item) => item.id === Number(startPlaceId));
  const endPlace = cities.find((item) => item.id === Number(endPlaceId));
  // tìm theo địa điểm xuất phát
  const isHaveEqualStartPlace =
    isEqualDayStartTourDepartureDays &&
    isEqualDayStartTourDepartureDays?.tours.filter(
      (item) => item.startPlace === startPlace.name
    );
  if (isHaveEqualStartPlace?.length === 0) return [];
  // tìm theo địa điểm đến
  var isHaveEqualEndplace;
  if (inCountry) {
    isHaveEqualEndplace =
      isHaveEqualStartPlace &&
      isHaveEqualStartPlace.filter(
        (item) => item.tourInfo.endPlace === endPlace.name
      );
  } else {
    isHaveEqualEndplace =
      isHaveEqualStartPlace &&
      isHaveEqualStartPlace.filter(
        (item) => item.tourInfo.cities[0].countryInfo.id === Number(endPlaceId)
      );
  }
  if (isHaveEqualEndplace?.length === 0) return [];
  // tìm theo số ngày tour
  var isInDuration;
  if (isHaveEqualEndplace) {
    isInDuration = filterOption(isHaveEqualEndplace, Number(duration));
    if (isInDuration?.length === 0) return [];
  }
  // filter theo range price
  const isInRangePrice =
    isInDuration &&
    isInDuration.filter(
      (item) =>
        item.tourInfo.adultPrice >= priceRange[0] &&
        item.tourInfo.adultPrice <= priceRange[1]
    );

  return isInRangePrice;
}

export function mergeArraysTourAndStartPlace(
  departureDays,
  departureDayAndTours,
  tours
) {
  const tourDeparureDayData = departureDays.map((item) => {
    const { dayStart, ...rest } = item;
    const tours = departureDayAndTours.filter(
      (tour) => tour.dayStartId === item.id
    );
    return { dayStart, tours, ...rest };
  });
  if (tourDeparureDayData) {
    tourDeparureDayData.sort((a, b) => {
      const dayStartA = new Date(a.dayStart);
      const dayStartB = new Date(b.dayStart);
      if (dayStartA < dayStartB) {
        return -1;
      }
      if (dayStartA > dayStartB) {
        return 1;
      }
      return 0;
    });
  }
  const newData = JSON.parse(JSON.stringify(tourDeparureDayData));
  for (const tourDepartureDay of newData) {
    for (const tour of tourDepartureDay.tours) {
      const matchingTour = tours.find((t) => t.id === tour.tourId);
      if (matchingTour) {
        tour.tourInfo = matchingTour;
      }
    }
  }
  return newData;
}
