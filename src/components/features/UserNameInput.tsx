import { Button } from "../common/Button";

interface UserNameInputProps {
  existingName: string;
  onExistingNameConfirm: () => void;
  onExistingNameReject: () => void;
}

const UserNameInput = ({
  existingName,
  onExistingNameConfirm,
  onExistingNameReject,
}: UserNameInputProps) => (
  <div className="flex flex-auto flex-col items-center justify-center">
    <div className="bubble mb-8">
      <p>ボクのお茶を飲みにきてくれてありがと〜。</p>
      <p>
        <span className="text-secondary">{existingName}</span>
        さんだよね〜？
      </p>
    </div>
    <div className="mb-4 flex flex-col items-center justify-center gap-y-5 sm:mb-10">
      <Button variant="select-btn" onClick={onExistingNameConfirm}>
        そうだよ〜
      </Button>
      <Button variant="select-btn" onClick={onExistingNameReject}>
        ちがうよ〜
      </Button>
    </div>
  </div>
);

export default UserNameInput;
