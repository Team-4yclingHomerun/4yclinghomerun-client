import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

import {
  defaultValues,
  SignupFormSchema,
} from '@/components/auth/schemas/SignupFormSchema';
import { Form, FormField } from '@/components/common/ui/form/Form';
import { Button } from '@/components/common/ui/button/button';
import { useAxios } from '@/hooks/useAxios';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues,
  });
  const navigate = useNavigate();

  const { handleRequest, isLoading } = useAxios<{ message: string }>({
    url: '/user/signUp',
    method: 'POST',
    initialData: { message: '' },
    shouldFetchOnMount: false,
    serverType: 'auth',
  });

  const onSubmit = async (data: z.infer<typeof SignupFormSchema>) => {
    try {
      const result = await handleRequest({ body: data });
      if (result) {
        navigate('/login', {
          state: { message: '회원가입이 완료되었습니다. 로그인해주세요.' },
        });
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('409')) {
        setError('username', {
          type: 'manual',
          message: '이미 사용 중인 아이디입니다.',
        });
      } else {
        setError('root', {
          type: 'manual',
          message:
            error instanceof Error
              ? error.message
              : '알 수 없는 오류가 발생했습니다.',
        });
      }
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
        label="이메일"
        name="email"
        type="email"
        register={register}
        error={errors.email}
        placeholder="이메일을 입력해주세요."
      />
      <FormField
        label="닉네임"
        name="nickname"
        type="text"
        register={register}
        error={errors.nickname}
        placeholder="닉네임을 입력해주세요."
      />
      <FormField
        label="비밀번호"
        name="password"
        type="password"
        register={register}
        error={errors.password}
        placeholder="비밀번호를 입력해주세요."
      />
      <FormField
        label="비밀번호 확인"
        name="passwordConfirm"
        type="password"
        register={register}
        error={errors.passwordConfirm}
        placeholder="비밀번호를 다시 입력해주세요."
      />
      {/* {errors.root && (
        <p className="mt-2 text-sm text-red-500">{errors.root.message}</p>
      )} */}
      <Button type="submit" className="w-full rounded-md" disabled={isLoading}>
        {isLoading ? '잠시만 기다려주세요.' : '회원가입'}
      </Button>
    </Form>
  );
};

export default SignupForm;
