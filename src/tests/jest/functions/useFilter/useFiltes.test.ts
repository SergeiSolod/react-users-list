import { describe, expect, test } from "@jest/globals";
import { filterUsers } from "modules/UserList/hooks/useFilter";
import {
  userArrayFindEmail,
  userArrayFindUsername,
  userArrayFindName,
  userArrayOneUser,
  userArrayFindNameUserNameEmail,
  userArrayTwoUsers,
  userArrayTwoUsersFindNameOneUser,
  userArrayTwoUsersFindNameTwoUsersOneEmail,
} from "../../../constants/constantsUseFilter";

describe("Testing the useFilter Hook", () => {
  describe("Testing an array where one user", () => {
    test("Undefined it should return undefined", () => {
      expect(filterUsers("", undefined)).toStrictEqual(undefined);
    });
    test("An empty array should return an empty array", () => {
      expect(filterUsers("", [])).toStrictEqual([]);
    });
    test("If we do not filter, the same array should be returned", () => {
      expect(filterUsers("", userArrayOneUser)).toStrictEqual(userArrayOneUser);
    });
    test('Looking for "ea" in the name', () => {
      expect(filterUsers("ea", userArrayOneUser)).toStrictEqual(
        userArrayFindName,
      );
    });
    test('Looking for "et" in the username', () => {
      expect(filterUsers("et", userArrayOneUser)).toStrictEqual(
        userArrayFindUsername,
      );
    });
    test('Looking for "Sinc" in the email', () => {
      expect(filterUsers("Sinc", userArrayOneUser)).toStrictEqual(
        userArrayFindEmail,
      );
    });
    test('Looking for "e" in the name, username, email', () => {
      expect(filterUsers("e", userArrayOneUser)).toStrictEqual(
        userArrayFindNameUserNameEmail,
      );
    });
  });

  describe("Testing an array where two users", () => {
    test("If we do not filter, the same array should be returned", () => {
      expect(filterUsers("", userArrayTwoUsers)).toStrictEqual(
        userArrayTwoUsers,
      );
    });
    test('Delete a user that does not have a name with "emen"', () => {
      expect(filterUsers("emen", userArrayTwoUsers)).toStrictEqual(
        userArrayTwoUsersFindNameOneUser,
      );
    });
    test('Highlight users with "ne" in their name and email', () => {
      expect(filterUsers("ne", userArrayTwoUsers)).toStrictEqual(
        userArrayTwoUsersFindNameTwoUsersOneEmail,
      );
    });
  });
});
