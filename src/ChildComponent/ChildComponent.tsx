import { Typography } from '@material-ui/core';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { HomeStore } from 'src/Stores/HomeStore';
import { childStyles } from './ChildComponent.Styles';

interface IProps extends WithStyles<typeof childStyles> {
    homeStore?: HomeStore;
}
export default withStyles(childStyles)(inject('homeStore')(observer(class ChildComponent extends React.Component<IProps, {}> {

    private textChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        // some implementation
    }

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.app}>
                <Typography variant='h2'>This is a child component</Typography>
                <input type='text' onChange={this.textChange} />
            </div>
        );
    }
})));