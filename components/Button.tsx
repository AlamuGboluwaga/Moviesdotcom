import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonProps } from './constants';
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({
  h,
  w,
  children,
  
  otherClasses,
  linearGradientProps,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity className={`${h} ${w} ${otherClasses}`} {...props}>
      <LinearGradient
        start={[1,0]}
        end={[1, 1]}
        colors={['#FF8C00', '#FFA300']}
        {...linearGradientProps}
      >
       {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
