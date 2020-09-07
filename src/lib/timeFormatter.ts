import DateMillis from '../types/DateMillis';
import StrTimeObj from '../types/StrTimeObj';
import { convertToTimeObj } from './convertTimeObj';

export default function timeFormatter(dateMillis: DateMillis): StrTimeObj {
	const timeObj = convertToTimeObj(dateMillis);
	return {
		seconds: (timeObj.seconds < 10 ? '0' : '') + timeObj.seconds.toString(),
		minutes: (timeObj.minutes < 10 ? '0' : '') + timeObj.minutes.toString(),
		hours: (timeObj.hours < 10 ? '0' : '') + timeObj.hours.toString(),
		days: (timeObj.days < 10 ? '0' : '') + timeObj.days.toString()
	};
}
