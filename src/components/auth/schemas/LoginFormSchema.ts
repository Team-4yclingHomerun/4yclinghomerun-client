import { z } from 'zod';

const defaultValues = {
  id: '',
  password: '',
};

const LoginFormSchema = z.object({
  id: z.string().min(3, { message: '아이디는 3자 이상 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 8자 이상 입력해주세요.' }),
});

export { defaultValues, LoginFormSchema };
