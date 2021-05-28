# react-native-fake-caret

creates a fake caret, used in some cases as otp focus
> npm i --save react-native-fake-caret

or

> yarn add react-native-fake-caret

## Demo
![react-native-fake-caret.gif](https://github.com/0x0a0d/react-native-fake-caret/raw/master/demo/react-native-fake-caret.gif?raw=true)

## Usage

```js
import React, { useRef } from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'

import { FakeCaret } from '@cylution/react-native-fake-caret'

const CaretComponent = () => {
  return (
    <Text style={{ fontWeight: '600', fontSize: 32, color: 'red' }}>
      {'|'}
    </Text>
  )
}

const App = () => {
  const refCaret = useRef()

  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View style={{ marginBottom: 10 }}>
        <Button title={'Show'} onPress={() => refCaret.current?.show()} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title={'Hide'} onPress={() => refCaret.current?.hide()} />
      </View>
      <View style={{ borderWidth: 1, padding: 10, alignItems: 'center' }}>
        <FakeCaret
          ref={refCaret}
          CaretComponent={CaretComponent}
        />
      </View>
    </SafeAreaView>
  )
}

export default App
```

### params

```js
// craete a ref
const refCaret = useRef()
const CaretCustomComponent = () => {
  // letterSpacing should be -1 if multiple _ be used
  return <Text style={{letterSpacing: -1}}>___</Text>
}
<FakeCaret
    ref={refCaret} // dont fotget
    animatedStyle={{}} // optional: apply to animated style
    CaretComponent={CaretCustomComponent} // optional: caret component
/>
```

# Author
+ [0x0a0d](https://github.com/0x0a0d)
