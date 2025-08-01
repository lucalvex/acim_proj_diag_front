import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { setAuth, finishInitialLoad } from '@/redux/features/authSlice';
import { useVerifyMutation } from '@/redux/features/authApiSlice';

export default function useVerify() {
    const dispatch = useAppDispatch();

    const [verify] = useVerifyMutation();

    useEffect(() => {
        verify(undefined)
            .unwrap()
            .then(() => {
                dispatch(setAuth());
            })
            .catch((error) => {
                if (error.status === 400) {
                    // Usuário não está logado, comportamento esperado
                }
            })
            .finally(() => {
                dispatch(finishInitialLoad());
            });
    }, [dispatch, verify]);
}