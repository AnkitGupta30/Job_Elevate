import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Joystick, LogOut, User2, User2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "../utils/constant";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-white sticky top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center mx-auto lg:max-w-5xl h-16 px-5 lg:px-0">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#F83002]">Elevate</span>
            </h1>
          </Link>
        </div>
        <div className="flex items-center lg:gap-12 gap-4">
          <ul className="flex font-medium lg:gap-5 gap-3 items-center">
            {user && user?.role === "recruiter" ? (
              <>
                <li>
                  <Link to={"/admin/companies"}>Companies</Link>
                </li>
                <li>
                  <Link to={"/admin/jobs"}>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/"} className="hidden lg:block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/jobs"} className="hidden lg:block">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to={"/browse"} className="hidden lg:block">
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={"/signup"}>
                {" "}
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col text-gray-600 my-2">
                    {user?.role === "student" && (
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to={"/profile"}>View Profile</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-6 cursor-pointer my-2.5">
                      {user?.role === "student" && (
                        <>
                          <Joystick />
                          <Link
                            to={"/jobs"}
                            className="font-semibold text-black"
                          >
                            Jobs
                          </Link>
                        </>
                      )}
                    </div>
                    <div className="flex w-fit items-center gap-6 cursor-pointer">
                      {user?.role === "student" && (
                        <>
                          <User2Icon />
                          <Link
                            to={"/browse"}
                            className="font-semibold text-black"
                          >
                            Browse
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
