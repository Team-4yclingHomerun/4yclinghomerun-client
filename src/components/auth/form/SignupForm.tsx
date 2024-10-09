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

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues,
  });
  const navigate = useNavigate();

  const onSubmit = (data: z.infer<typeof SignupFormSchema>) => {
    console.log(data); // 추후 삭제 예정
    navigate('/login');
  };

  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
      <FormField
        label="아이디"
        name="id"
        type="text"
        register={register}
        error={errors.id}
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
      <Button type="submit" className="w-full rounded-md">
        회원가입
      </Button>
    </Form>
  );
};

export default SignupForm;
