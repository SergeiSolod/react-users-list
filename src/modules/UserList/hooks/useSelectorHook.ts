import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "store";

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;
