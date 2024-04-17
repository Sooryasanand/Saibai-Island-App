import { StyleSheet, Text, View, Modal, TouchableOpacity, Dimensions, FlatList, Linking, Platform} from 'react-native';
import { parse, stringify } from 'lossless-json'
import React from 'react';


const deviceHeight = Dimensions.get("window").height

export class CallPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }
    
    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex: 1, width: '100%'}} />
        if (!onTouch) return view

        return (
            <TouchableOpacity onPress={onTouch} style={{flex: 1, width: '100%'}}>
                {view}
            </TouchableOpacity>
        )
    }

    renderTitle = () => {
        const {title} = this.props
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={{color: 'black', fontSize: 25, fontWeight: '500', marginTop: 15, marginBottom: 30}}>
                    {title}
                </Text>
            </View>
        )
    }

    renderContent = () => {
        const {data} = this.props
        return (
            <View>
                <FlatList 
                    style={{marginBottom: 20}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                />
            </View>
        )
    }

    dialCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    };

    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{height: 50, flex: 1, alignItems: 'flex-start'}} onPress={() => {this.dialCall(item.number)}}>
                <Text style={{fontSize: 19, fontWeight: 'normal', color: '#182E44'}}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    renderSeparator = () => {
        <View
            style={{
                opacity: 0.1,
                backgroundColor: '#182E44',
                height: 1
            }}
        >

        </View>
    }


    render() {
        let {show} = this.state
        const {onTouchOutside, title} = this.props

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{flex: 1, backgroundColor: '#00000AA', justifyContent: 'flex-end', }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.4
                    }}>
                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    
});


