import { createStyles, Theme } from '@material-ui/core';

export const childStyles = (theme: Theme) =>
    createStyles({
        app: {
            textAlign: 'center',
            color: theme.palette.primary.main
        }
    });