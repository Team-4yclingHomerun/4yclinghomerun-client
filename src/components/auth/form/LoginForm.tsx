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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });
  const navigate = useNavigate();

  const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
    console.log(data); // 추후 삭제 예정
    navigate('/');
  };

  return (
    <main className="rounded-md bg-white p-8">
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
          label="비밀번호"
          name="password"
          type="password"
          register={register}
          error={errors.password}
          placeholder="비밀번호를 입력해주세요."
        />
        <Button type="submit" className="w-full rounded-md">
          로그인
        </Button>
      </Form>
    </main>
  );
};

export default LoginForm;
