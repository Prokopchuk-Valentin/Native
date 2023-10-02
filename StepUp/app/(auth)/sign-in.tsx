import { Stack, useRouter } from 'expo-router';
import { useRef } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import tailwind from 'twrnc';
import { useAuth } from '../context/auth';

export default function SignIn() {
	const { signIn } = useAuth();
	const router = useRouter();

	const emailRef = useRef('');
	const passwordRef = useRef('');

	return (
		<>
			<Stack.Screen options={{ title: 'sign in', headerShown: false }} />
			<View
				style={tailwind`flex-1 items-center justify-center bg-slate-50`}>
				<View style={tailwind`p-8 w-full max-w-sm`}>
					<Text
						style={tailwind`text-5xl font-bold mb-6 text-slate-900 flex flex-row justify-center`}>
						Вход
					</Text>

					<TextInput
						style={tailwind`w-full bg-white border border-slate-200 rounded-md h-12 px-4 mb-4 text-center
            `}
						placeholderTextColor="#000"
						placeholder="Введите адрес электронной почты"
						autoCapitalize="none"
						nativeID="email"
						onChangeText={(text) => {
							emailRef.current = text;
						}}
					/>

					<TextInput
						style={tailwind`w-full bg-white border border-slate-200 rounded-md h-12 px-4 text-center`}
						placeholderTextColor="#000"
						placeholder="Введите пароль"
						secureTextEntry={true}
						nativeID="password"
						onChangeText={(text) => {
							passwordRef.current = text;
						}}
					/>

					<View
						style={tailwind`flex flex-row justify-center items-center my-8`}>
						<Pressable>
							<Text
								style={tailwind`text-blue-400 font-bold`}
								onPress={() => router.push('/sign-up')}>
								Создать новый аккаунт
							</Text>
						</Pressable>
					</View>

					<Pressable
						style={tailwind`h-12 bg-purple-500 rounded-md flex flex-row justify-center items-center px-6`}>
						<View style={tailwind`flex-1 flex items-center`}>
							<Text
								style={tailwind`text-white text-base font-medium`}
								onPress={async () => {
									const { data, error } = await signIn(
										emailRef.current,
										passwordRef.current,
									);
									if (data) {
										router.replace('/');
									} else {
										console.log(error);
										// Alert.alert("Login Error", resp.error?.message);
									}
								}}>
								Войти
							</Text>
						</View>
					</Pressable>
				</View>
			</View>
		</>
	);
}
