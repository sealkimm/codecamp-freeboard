import type { MouseEvent } from 'react';
import type { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onClickDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;
}
