import { loginFx, registerFx } from '@/entities/auth/lib'
import { getSelfFx } from '@/entities/user/lib'
import { createStore } from 'effector/effector.mjs'

export type User = {
	username: string
	email?: string
	password: string
}

export const $user = createStore<User | null>(null)
	.on(loginFx.doneData, (_, user) => user)
	.on(loginFx.failData, (_, error) => {
		console.log(error)
	})
	.on(registerFx.doneData, (_, user) => user)
	.on(registerFx.failData, (_, error) => {
		console.log(error)
	})
	.on(getSelfFx.doneData, (_, user) => user)
	.on(getSelfFx.failData, (_, error) => {
		console.log(error)
	})
