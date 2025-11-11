import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
const SocialLogin = () => {
  return (
    <form>
      <div className="flex gap-1 mt-4 px-4">
        <Button
          size="sm"
          className="flex-1 text-default-700"
          variant="outline"
          type="submit"
        >
          <Icon icon="flat-color-icons:google" className="w-4 h-4 me-1" />
          Use Google
        </Button>
        <Button
          size="sm"
          className="flex-1 text-default-700"
          variant="outline"
          type="submit"
        >
          <Icon icon="devicon:github" className="w-4 h-4 me-1" />
          Use Github
        </Button>
      </div>
    </form>
  );
};

export default SocialLogin;
