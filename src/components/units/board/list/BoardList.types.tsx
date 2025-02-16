import type { MouseEvent } from 'react';
import type { IQuery, IQueryFetchBoardsArgs } from '../../../../commons/types/generated/types';
import type { ApolloQueryResult } from '@apollo/client';

export interface IBoardListUIProps {
  data?: Pick<IQuery, 'fetchBoards'>;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (variables?: Partial<IQueryFetchBoardsArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
  count?: number;
}
