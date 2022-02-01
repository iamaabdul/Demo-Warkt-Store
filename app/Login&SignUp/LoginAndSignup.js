import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import { useRef } from "react";
import FormHeader from "../Login&SignUp/components/FormHeader";
import FormSelectorBtn from "../Login&SignUp/components/FormSelectorBtn";
import LoginForm from "../Login&SignUp/components/LoginForm";
import SignUpForm from "../Login&SignUp/components/SignUpForm";

const { width } = Dimensions.get("window");

const LoginAndSignup = ({ navigation }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  //Animations
  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(0, 0, 0,1)", "rgba(0, 0, 0,0.4)"],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(0, 0, 0,0.4)", "rgba(0, 0, 0,1)"],
  });

  return (
    <View style={{ flex: 1, paddingTop: 120 }}>
      <View style={{ height: 100 }}>
        <FormHeader
          leftHeading={"Welcome "}
          rightHeading={"Back"}
          subHeading={"This is a test project"}
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
        <View style={{ flexDirection: "row", padding: 20 }}>
          <FormSelectorBtn
            style={styles.borderLeft}
            backgroundColor={loginColorInterpolate}
            title="Login"
            onPress={() => scrollView.current.scrollTo({ x: 0 })}
          />
          <FormSelectorBtn
            style={styles.borderRight}
            backgroundColor={signupColorInterpolate}
            title="Sign up"
            onPress={() => scrollView.current.scrollTo({ x: width })}
          />
        </View>
      </View>
      <ScrollView
        ref={scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <LoginForm navigation={navigation} />
        <SignUpForm navigation={navigation} />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

export default LoginAndSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  borderRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
