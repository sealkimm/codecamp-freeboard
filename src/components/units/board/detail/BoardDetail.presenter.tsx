import * as S from './BoardDetail.styles';
import type { IBoardDetailUIProps } from './BoardDetail.types';

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png"></S.Avatar>
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreateAt>Date : 2021.02.18</S.CreateAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
        </S.Body>
        <S.Feedback>
          <S.Like onClick={props.onClickUp}>
            <img src="/images/board/detail/btn-like.png" alt="" />
            <span>{props.like}</span>
          </S.Like>
          <S.Dislike onClick={props.onClickDown}>
            <img src="/images/board/detail/btn-dislike.png" alt="" />
            <span>{props.dislike}</span>
          </S.Dislike>
        </S.Feedback>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveEdit}>수정하기</S.Button>
        <S.Button id={props.data?.fetchBoard._id} onClick={props.onClickDelete}>
          삭제하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
