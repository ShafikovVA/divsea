import { useEffect, useLayoutEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setIsMobile, setIsTable } from '@/store/reducers/adaptiveReducer';

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
  };
  useLayoutEffect(() => {
    window.addEventListener('resize', setAdaptive);
  }, []);
  useEffect(() => {
    setAdaptive();
  }, []);
};
