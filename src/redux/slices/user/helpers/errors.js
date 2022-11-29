import { ERRORS } from '../constants';

const getError = (code, summary) => {
    switch (code) {
        case 'E0000001':
        case 'E0000004':
            if (summary?.includes('login:'))
                return ERRORS['XP001'];
            else if (summary?.includes('password:'))
                return ERRORS['XP002'];
            else
                return summary;
        case 'original':
            return summary?.split(':')?.[1];
        default:
            return ERRORS['default'];
    }
};

export { getError };
