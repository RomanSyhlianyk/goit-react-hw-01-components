import PropTypes from 'prop-types';
import clsx from 'clsx';
import style from './StatisticsItem.module.css';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li
      className={clsx(style.item, {
        [style.pdf]: label === '.pdf',
        [style.docx]: label === '.docx',
        [style.mp3]: label === '.mp3',
        [style.psd]: label === '.psd',
      })}
    >
      <span className="label"> {label}</span>
      <span className="percentage"> {percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
