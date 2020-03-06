import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'Settings',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    }

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'Dashboard'
        });

        localStorage.setItem('cryptoBoard', JSON.stringify({
            test: 'YOOOOYO'
        }));
    }

    savedSettings(){
        let cryptoBoardData = JSON.parse(localStorage.getItem('cryptoBoard'));
        if(!cryptoBoardData){
            return {page: 'Settings', firstVisit: true}
        }
        return {};
    }

    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}