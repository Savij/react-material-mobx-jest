import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../logo.svg';
import { HomeStore } from '../Stores/HomeStore';
import { styles } from './Home.Styles';

interface IProps extends RouteComponentProps<{}> {
    homeStore?: HomeStore;
}

export default withStyles(styles)(
    inject('homeStore')(
        withRouter(
            observer(
                class Home extends React.Component<
                    IProps & RouteComponentProps<{}> & WithStyles<typeof styles>,
                    {}
                    > {
                    public render() {
                        const { classes } = this.props;
                        return (
                            <div className={classes.app}>
                                <header className={classes.appHeader}>
                                    <img src={logo} className={classNames(classes.appLogo, classes.spin)} alt='logo' />
                                    <h1 className={classes.appTitle}>Welcome to React</h1>
                                </header>
                                <p className={classes.appIntro}>
                                    To get started, edit <code>src/App.tsx</code> and save to reload.
                                </p>
                            </div>
                        );
                    }
                }))));