import { Flight } from 'src/app/flight';
import { Company } from 'src/app/company';
import { Airport } from 'src/app/airport';
import { airports } from './airports';
const today: Date = new Date();
const dayOfWeek: number = today.getDay();

const planes: string[] = ['Embraer', 'Boeing 737', 'Boeing 747'];
const companies: Company[] = [
  {
    name: 'Lufthansa',
    flightNamePrefix: 'LH',
  },
  {
    name: 'LOT',
    flightNamePrefix: 'LT',
  },
  {
    name: 'Tap Portugal',
    flightNamePrefix: 'TP',
  },
  {
    name: 'Emirates',
    flightNamePrefix: 'EM',
  },
  {
    name: 'Ryan Air',
    flightNamePrefix: 'RA',
  },
];

const monday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 1,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      monday.push(element);
    }
  }
}
const tuesday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 2,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      tuesday.push(element);
    }
  }
}
const wednesday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 3,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      wednesday.push(element);
    }
  }
}
const thursday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 4,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      thursday.push(element);
    }
  }
}
const friday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 5,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      friday.push(element);
    }
  }
}
const saturday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 6,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      saturday.push(element);
    }
  }
}
const sunday: Flight[] = [];
for (let i = 0; i < airports.length; i++) {
  for (let x = 0; i < airports.length; x++) {
    const duration: number =
      airports[i].coords - airports[x].coords > 0
        ? (airports[i].coords - airports[x].coords) * 30 + 30
        : (airports[x].coords - airports[i].coords) * 30 + 30;
    const company: Company =
      companies[Math.floor(companies.length * Math.random())];
    const element: Flight = {
      origin: airports[i],
      destination: airports[x],
      date: 7,
      durationM: duration,
      plane: duration > 300 ? planes[2] : duration > 90 ? planes[1] : planes[0],
      flightNumber:
        company.flightNamePrefix + Math.floor(Math.random() * 9999).toString(),
      company: company,
    };
    if (element.origin !== element.destination) {
      sunday.push(element);
    }
  }
}

const flights: any = [
  ...monday,
  ...tuesday,
  ...wednesday,
  ...thursday,
  ...friday,
  ...saturday,
  ...sunday,
];

export { flights };
