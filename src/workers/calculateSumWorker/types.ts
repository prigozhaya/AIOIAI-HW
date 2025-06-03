export interface WorkerMessage {
  type: 'calculateSum';
  payload: {
    limit: number;
  };
}
export interface WorkerResult {
  type: 'calculationComplete';
  result: number;
}