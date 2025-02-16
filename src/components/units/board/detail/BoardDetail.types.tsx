import type { IQuery } from '../../../../../src/commons/types/generated/types';
import type { MouseEvent } from 'react';

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, 'fetchBoard'>;
  onClickOpenModal: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickList: () => void;
  onClickMoveEdit: () => void;
  onClickUp: () => void;
  onClickDown: () => void;
  like: number;
  dislike: number;
  isOpenDeleteModal: boolean;
  onClickDelete: () => void;
  onClickDeleteCancel: () => void;
}
