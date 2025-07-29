import { useEffect, useLayoutEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import {
  setIsMobile,
  setIsTable,
  setIsDeskS,
} from '@/store/reducers/ui/adaptiveReducer';

export const useAdaptive = () => {
  const dispatch = useAppDispatch();
  const setAdaptive = () => {
    if (window.innerWidth <= 767) {
      dispatch(setIsMobile(true));
    } else {
      dispatch(setIsMobile(false));
    }
    if (window.innerWidth <= 1023) {
      dispatch(setIsTable(true));
    } else {
      dispatch(setIsTable(false));
    }
    if (window.innerWidth <= 1365) {
      dispatch(setIsDeskS(true));
    } else {
      dispatch(setIsDeskS(false));
    }
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', setAdaptive);
    return () => window.addEventListener('resize', setAdaptive);
  }, []);
  useEffect(() => {
    setAdaptive();
  }, []);
};
