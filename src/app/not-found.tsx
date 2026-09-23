import SubpageLayout from '@/components/SubpageLayout';
import { getI18n } from '@/i18n/get-locale';

export default async function NotFound() {
  const { m } = await getI18n();

  return (
    <SubpageLayout title={m.notFound.title}>
      <p className="text-center text-gray-600 py-8">{m.notFound.body}</p>
    </SubpageLayout>
  );
}
