const logFunction = (data: unknown): never => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
  // return undefined; -> void
  // throw new Error("Bad!");
  while (true) {
    console.log(data2);
  }
};

let a: number;
let b: boolean;
let c: string;

// let d: string[];
let d: Array<string>;

type Permissionss = "admin" | "user" | "manager";

type PermissionssWithoutAdmin = Exclude<Permissionss, "admin">;

interface DepartmentsForPermission {
  depName: string;
  lvl: number;
}

const DepsForPerms: Record<Permissionss, DepartmentsForPermission> = {
  admin: {
    depName: "security",
    lvl: 10,
  },
  user: {
    depName: "sales",
    lvl: 5,
  },
  manager: {
    depName: "sales",
    lvl: 10,
  },
};

type TuplePermissions = [Permissionss, Permissionss];

const perm: TuplePermissions = ["admin", "user"];

// type User = {
//   name: string;
//   surname: string;
//   age: number;
//   isAdmin: boolean;
// };

type BasicUser<A = boolean, P = string[]> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};

type BasicUserWithoutPermissions = Omit<BasicUser, "permissions">;

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;

type BasicUserReadOnly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;
type BasicUserReadOnlyRequired = Readonly<Required<BasicUser>>;

const user: FullUser<boolean> = {
  name: "John",
  surname: "Doe",
  age: 20,
  isAdmin: true,
  account: 100,
  permissions: ["admin", "user"],
};

// interface UserWithPermissions extends BasicUser {
//   permissions: string[];
// }

const user2: BasicUser<number> = {
  name: "John",
  surname: "Doe",
  age: 20,
  isAdmin: 1,
  permissions: ["manager", "operator", "instructor"],
};

const usersArray: BasicUser[] = [user, user, user];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

type BasicFunction = () => FullUser[];

type getFirstReturnType = ReturnType<BasicFunction>;

getFirst<BasicUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;

const add: MathFunc = (a, b) => a + b;
