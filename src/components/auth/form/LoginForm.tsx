import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import {
  defaultValues,
  LoginFormSchema,
} from '@/components/auth/schemas/LoginFormSchema';
import { Form, FormField } from '@/components/common/ui/form/Form';
import { Button } from '@/components/common/ui/button/button';
import { useAuthStore } from '@/stores/AuthStore';
import { useAxios } from '@/hooks/useAxios';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const { handleRequest, isLoading } = useAxios<{ token: string }>({
    url: '/login',
    method: 'POST',
    initialData: { token: '' },
    shouldFetchOnMount: false,
    serverType: 'backend',
  });

  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
    try {
      const result = await handleRequest({ body: data });
      if (result && result.token) {
        setAccessToken(result.token, 'general');
        navigate('/');
      }
    } catch (error) {
      setError('root', {
        type: 'manual',
        message:
          error instanceof Error
            ? error.message
            : '알 수 없는 오류가 발생했습니다.',
      });
    }
  };

  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
      <FormField
        label="아이디"
        name="username"
        type="text"
        register={register}
        error={errors.username}
        placeholder="아이디를 입력해주세요."
      />
      <FormField
        label="비밀번호"
        name="password"
        type="password"
        register={register}
        error={errors.password}
        placeholder="비밀번호를 입력해주세요."
      />
      {errors.root && (
        <p className="mt-2 text-sm text-red-500">{errors.root.message}</p>
      )}
      <Button type="submit" className="w-full rounded-md" disabled={isLoading}>
        {isLoading ? '잠시만 기다려주세요.' : '로그인'}
      </Button>
    </Form>
  );
};

export default LoginForm;
