import React , {useState , useEffect} from 'react'
import { Text, View , TouchableOpacity, StyleSheet, TextInput} from 'react-native'

export default function Screen1(props) {
    const [taikhoan, settaikhoan] = useState('')
    const [matkhau, setmatkhau] = useState(0)
    const [title, settitle] = useState('Dang nhap he thong')

    //Componet didmount
    // useEffect(() => {
    //     setmatkhau("123")
    //     console.log("Co mk")
    // },[])

    //component did update
    // useEffect(() => {
    //     settaikhoan("123")
    //     console.log("Co tk")
    // })

    //Component will mount
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setmatkhau(matkhau + 1)
            console.log(matkhau)
            props.setShow(false)
            console.log("co")
        } , 1000)
        return () => {
            clearInterval(timeInterval)
        }
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.texttile}>{title}</Text>
            <TextInput 
                onChangeText={text => settaikhoan(text)}
                placeholder="Nhap tai khoan"
                style={styles.textinput}/>
            <TextInput 
                value={matkhau}
                placeholder="Nhap mat khau"
                style={styles.textinput}/>
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Screen2",{name : taikhoan , settitle})}
                style={styles.buttondangnhap}
                >
                <Text style={styles.textdangnhap}>Dang nhap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1 ,
        paddingTop: 50,
        alignItems : 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f5f5dc'
    },
    texttile: {
        fontSize : 30,
        color : 'red',
    },
    textinput: {
        width: '100%',
        height : 40,
        borderWidth : 1,
        borderRadius : 5,
        marginTop: 20,
        paddingLeft: 10,
        fontSize : 20
    },
    buttondangnhap: {
        marginTop : 20,
        backgroundColor : 'green',
        padding : 20,
        borderRadius : 5
    },
    textdangnhap: {
        color : 'white',
        fontSize : 20
    }
})


// Mounting
// - render
// - uses Effect (component didmount)

// Updating
// - use Effect clean 
// - xu ly doan code effect

// Mounting
// - clear code side effect


// destructuring 
