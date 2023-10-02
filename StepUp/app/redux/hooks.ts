import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from './store';

// ! типизация отличается от обычного htlfrc
type DispatchFunc = () => ThunkDispatch<RootState, unknown, AnyAction>;
// !сверху эни может быть


export const useAppDispath: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
