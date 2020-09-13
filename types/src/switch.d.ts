export default class Switch {
    static propTypes: {
        value: any;
        onChangeValue: any;
        activeText: any;
        inactiveText: any;
        fontSize: any;
        activeTextColor: any;
        inactiveTextColor: any;
        activeBackgroundColor: any;
        inactiveBackgroundColor: any;
        activeButtonBackgroundColor: any;
        inactiveButtonBackgroundColor: any;
        switchWidth: any;
        switchHeight: any;
        switchBorderRadius: any;
        switchBorderColor: any;
        switchBorderWidth: any;
        buttonWidth: any;
        buttonHeight: any;
        buttonBorderRadius: any;
        buttonBorderColor: any;
        buttonBorderWidth: any;
        animationTime: any;
        padding: any;
        shadowColor: any;
        shadowOffset: any;
        shadowRadius: any;
        shadowOpacity: any;
        buttonTextOn: any;
        buttonTextOff: any;
        buttonTextColor: any;
        buttonTextSize: any;
    };
    static defaultProps: {
        value: boolean;
        onChangeValue: () => any;
        activeText: string;
        inactiveText: string;
        fontSize: number;
        activeTextColor: string;
        inactiveTextColor: string;
        activeBackgroundColor: string;
        inactiveBackgroundColor: string;
        activeButtonBackgroundColor: string;
        inactiveButtonBackgroundColor: string;
        switchWidth: number;
        switchHeight: number;
        switchBorderRadius: number;
        switchBorderColor: string;
        switchBorderWidth: number;
        buttonWidth: number;
        buttonHeight: number;
        buttonBorderRadius: number;
        buttonBorderColor: string;
        buttonBorderWidth: number;
        animationTime: number;
        padding: number;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowRadius: number;
        shadowOpacity: number;
        buttonTextOn: any;
        buttonTextOff: any;
        buttonTextColor: string;
        buttonTextSize: number;
    };
    constructor(props: any, context: any);
    padding: any;
    transformValue: number;
    state: {
        transformValue: any;
        backgroundColor: any;
        buttonBackgroundColor: any;
    };
    componentDidUpdate(prevProps: any): void;
    startGroupAnimations: () => void;
    render(): any;
}
