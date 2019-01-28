import moment from "moment";

export const isNumber = ({ value, required }) => {
  const result = { required };
  const number = new RegExp("[0-9].*");
  if (!number.test(value)) result.message = "That is not a number.";
  return result;
};

export const isShorterThan = ({ value, length, required }) => {
  const result = { required };
  if (value.length >= length) result.message = "Too long.";
  return result;
};

export const isLongerThan = ({ value, length, required }) => {
  const result = { required };
  if (value.length <= length) result.message = "Too short.";
  return result;
};

export const isReasonableDate = ({ value, required }) => {
  const result = { required };
  const lastYear = moment().subtract(1, "year");
  const nextYear = moment().add(1, "year");
  if (moment(value).isBefore(lastYear)) result.message = "Seems too old.";
  if (moment(value).isAfter(nextYear))
    result.message = "Seems too far in the future.";
  return result;
};

export const isWithinRange = ({ value, min, max, required }) => {
  const result = { required };
  const number = Number(value);
  if (number > max) result.message = "Seems a bit high.";
  if (number < min) result.message = "Seems too low.";
  return result;
};
