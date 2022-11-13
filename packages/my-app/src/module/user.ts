import { User } from "./orm/user";

export async function findAllUser() {
  try {
    const result = await User.findAll();
    return result.map((r) => r.dataValues);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function findUserByUserName(Name: string) {
  try {
    const result = await User.findOne({
      where: { Name },
    });
    return result.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function findUserByUserId(id: number) {
  try {
    const result = await User.findOne({
      where: { id },
    });
    return result.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createUser({
  Name,
  Password,
  Alias,
}: {
  Name: string;
  Password: string;
  Alias: string;
}) {
  try {
    const result = await User.create({
      Name,
      Password,
      Alias,
    });

    return result.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updatePswByUserId({
  id,
  Password,
}: {
  id: number;
  Password: string;
}) {
  try {
    await User.update(
      { Password },
      {
        where: {
          id,
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function updateAliasByUserId({
  id,
  Alias,
}: {
  id: number;
  Alias: string;
}) {
  try {
    await User.update(
      { Alias },
      {
        where: {
          id,
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function updatePswByUserName({
  Name,
  Password,
}: {
  Name: string;
  Password: string;
}) {
  try {
    await User.update(
      { Password },
      {
        where: {
          Name,
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function updateAliasByUserName({
  Name,
  Alias,
}: {
  Name: string;
  Alias: string;
}) {
  try {
    await User.update(
      { Alias },
      {
        where: {
          Name,
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteUserByUserName(Name: string) {
  try {
    await User.destroy({
      where: {
        Name,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteUserByUserId(id: number) {
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
