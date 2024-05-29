import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const KeyBoard = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState(null);
    const [operation, setOperation] = useState('');

    const handleNumberPress = (buttonValue) => {
        setFirstNumber(firstNumber + buttonValue); // If firstnumber has more than one digit, we concatenate it
    }

    const handleOperationPress = (buttonValue) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber('');

    }

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setResult(null);
        setOperation('');
    }

    const getResult = () => {
        setSecondNumber('');
        setOperation('');
        switch(operation) {
            case '+':
                setResult(parseInt(firstNumber) + parseInt(secondNumber));
                break;
            case '-':
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case '*':
                setResult(parseInt(firstNumber) * parseInt(secondNumber));
                break;
            case '/':
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
    }

    const removeOperation = () => {
        setFirstNumber(firstNumber.slice(0, firstNumber.length - 1))
    }

    const firstNumberDisplay = () => {
        if(result !== null) {
            return <Text style={styles.NumberDisplay}>{result?.toString()}</Text>
        }
        if(firstNumber && firstNumber.length <= 6) {
            return <Text style={styles.NumberDisplay}>{firstNumber}</Text>
        }
        if(firstNumber.length > 6 && firstNumber.length <= 9) {
            return <Text style={styles.greaterThanSix}>{firstNumber}</Text>
        }
        if(firstNumber.length > 9 && firstNumber.length <= 12) {
            return <Text style={styles.greaterThanNine}>{firstNumber}</Text>
        }
        if (firstNumber === '') {
            return <Text style={styles.NumberDisplay}>{"0"}</Text>
        }
    }

    return (
        <View style={{marginBottom: 50}}>
            <View style={{justifyContent: 'flex-end', alignSelf: 'center', left: 150, top: 90}}>
                <Text style ={styles.secondNumberDisplay}>
                    {secondNumber}
                    <Text style ={{position: 'absolute', right: 30, fontSize: 50, fontWeight: '500' , color: 'lightgreen'}}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => clear()}>
                    <View style={styles.btn}><Text style={styles.textStyle}>C</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={({pressed}) => pressed && styles.pressedItem}>
                    <View style={styles.btn}><Text style={styles.textStyle}>+/-</Text></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={({pressed}) => pressed && styles.pressedItem}>
                    <View style={styles.btn}><Text style={styles.textStyle}>%</Text></View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleOperationPress('/')}>
                    <View style={styles.btn2}><Text style={styles.textStyle}>/</Text></View>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('7')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>7</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('8')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>8</Text></View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('9')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>9</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleOperationPress('*')}>
                    <View style={styles.btn2}><Text style={styles.textStyle}>x</Text></View>
                </TouchableOpacity>

            </View>

            <View style={styles.row}>
                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('4')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>4</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('5')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>5</Text></View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('6')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>6</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleOperationPress('-')}>
                    <View style={styles.btn2}><Text style={styles.textStyle}>-</Text></View>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('1')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('2')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>2</Text></View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('3')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>3</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleOperationPress('+')}>
                    <View style={styles.btn2}><Text style={styles.textStyle}>+</Text></View>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem}>
                    <View style={styles.btn}><Text style={styles.textStyle}>.</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => handleNumberPress('0')}>
                    <View style={styles.btn}><Text style={styles.textStyle}>0</Text></View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => removeOperation()}>
                    <View style={styles.btn}><Text style={styles.textStyle}>DEL</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={({pressed}) => pressed && styles.pressedItem} onPress={() => getResult()} >
                    <View style={styles.btn2}><Text style={styles.textStyle}>=</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default KeyBoard;

const styles = StyleSheet.create({
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
    },
    btn: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        backgroundColor: '#aacc00'
    },
    btn2: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        backgroundColor: '#F78672'
    },
    pressedItem: {
        opacity: 0.5,
    },
    textStyle: {
        fontSize: 35,
        fontWeight: '500',
        color: 'white'
    },
    NumberDisplay: {
        fontSize: 80,
        color: '#F78672',
        position: 'absolute',
        bottom: 90,
        right: -10
    },
    secondNumberDisplay: {
        fontSize: 50,
        color: '#F78672',
        position: 'absolute',
        bottom: 170,
        //right: -2,
        alignSelf: 'flex-end'

    },
    operationDisplay: {
        color: 'orange'
    },
    greaterThanSix: {
        fontSize: 60,
        color: '#F78672',
        position: 'absolute',
        bottom: 90,
        right: -10
    },
    greaterThanNine: {
        fontSize: 40,
        color: '#F78672',
        position: 'absolute',
        bottom: 90,
        right: -10
    }
});