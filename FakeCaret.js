import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { Animated, Text } from 'react-native'

const CaretDefaultComponent = () => {
  return (
    <Text>_</Text>
  )
}
export const FakeCaret = forwardRef(({
                                       animatedStyle = {},
                                       CaretComponent = CaretDefaultComponent,
                                     }, ref) => {
  const [visible, setVisible] = useState(false)
  const [animation, setAnimation] = useState()

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }))

  const fadeAim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (visible) {
      setAnimation(Animated.loop(Animated.sequence([
        Animated.delay(150),
        Animated.timing(fadeAim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: false
        }),
        Animated.delay(150),
      ])))
    } else if (animation != null) {
      animation.stop()
      setAnimation(null)
    }
  }, [visible])

  useEffect(() => {
    if (animation != null) {
      animation.start(() => fadeAim.setValue(0))
    }
  }, [animation])
  return (
    <Animated.View
      style={[
        animatedStyle,
        {
          opacity: fadeAim
        }
      ]}
    >
      <CaretComponent />
    </Animated.View>
  )
})
