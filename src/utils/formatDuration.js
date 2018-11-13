import moment from 'moment'
import momentDurationFormatSetup  from 'moment-duration-format'

momentDurationFormatSetup(moment);

const formatDuration = (duration) => {
    if (!duration) {
        return false;
    }
    return moment.duration(duration, 'minutes').format('h [godz.] mm');
};

export default formatDuration;