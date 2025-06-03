import { type JSX, useEffect, useState } from "react";
import type { WorkerMessage, WorkerResult } from "../../workers/calculateSumWorker/types";




export default function Dashboard(): JSX.Element {
  const [sumResult, setSumResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL('../../workers/calculateSumWorker/calculateSumWorker.ts', import.meta.url), {
  type: 'module'
});
    console.log(worker)
    worker.onmessage = (event: MessageEvent<WorkerResult>) => {
      const { type, result } = event.data;

      if (type === 'calculationComplete') {
        setSumResult(result);
        setIsCalculating(false);
        setError(null);
      }
    };

    worker.onerror = (e: ErrorEvent) => {
      console.error('Web Worker error:', e);
      setError('Ошибка при вычислении. Пожалуйста, попробуйте еще раз.');
      setIsCalculating(false);
    };

    setIsCalculating(true);
    setError(null);

    const messageToSend: WorkerMessage = {
      type: 'calculateSum',
      payload: { limit: 1e8 }
    };
    worker.postMessage(messageToSend);

    return () => {
      worker.terminate();
    };
  }, []);

  return (
    <div>
      <h1>Результат длительных вычислений</h1>
      {isCalculating && <p>Вычисляю... Это может занять некоторое время, но UI не заблокирован!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isCalculating && sumResult !== null && (
        <p>Сумма от 0 до 1e8: <strong>{sumResult}</strong></p>
      )}
      {!isCalculating && sumResult === null && !error && (
        <p>Ожидаю начала вычислений...</p>
      )}
    </div>
  );
}