import useSWRMutation from 'swr/mutation';

type SubmitFetcher<TInput, TResponse> = (url: string, options: { arg: TInput }) => Promise<TResponse>;

export function useSubmit<TInput, TResponse = any>(
  endpoint: string,
  fetcher?: SubmitFetcher<TInput, TResponse>
) {
  const fallbackFetcher: SubmitFetcher<TInput, TResponse> = async (url, { arg }) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(arg),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || 'Submission failed');
    }

    return res.json();
  };

  const { trigger, isMutating, data, error } = useSWRMutation(endpoint, fetcher ?? fallbackFetcher);

  return {
    submit: trigger as (values: TInput) => Promise<TResponse>,
    isMutating,
    data,
    error,
  };
}
