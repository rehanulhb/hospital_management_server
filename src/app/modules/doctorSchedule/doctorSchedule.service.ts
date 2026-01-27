import { prisma } from "../../shared/prisma.js";
import type { IJWTPayload } from "../../types/common.js";

const insertIntoDB = async (
  user: IJWTPayload,
  payload: { scheduleIds: string[] },
) => {
  const doctorData = await prisma.doctor.findUniqueOrThrow({
    where: {
      email: user.email,
    },
  });

  const doctorScheduleData = payload.scheduleIds.map((scheduleId) => ({
    doctorId: doctorData.id,
    scheduleId,
  }));

  return await prisma.doctorSchedules.createMany({
    data: doctorScheduleData,
  });
};

export const DoctorScheduleService = {
  insertIntoDB,
};
