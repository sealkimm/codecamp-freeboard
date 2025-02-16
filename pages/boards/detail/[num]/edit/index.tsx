import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import type { IQuery, IQueryFetchBoardArgs } from '../../../../../src/commons/types/generated/types';
import BoardWrite from '../../../../../src/components/units/board/write/BoardWrite.container';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        addressDetail
        address
      }
    }
  }
`;

export default function Board(): JSX.Element {
  const router = useRouter();
  if (!router || typeof router.query.num !== 'string') return <></>;

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: router.query.num },
  });

  return <BoardWrite isEdit={true} data={data}></BoardWrite>;
}
