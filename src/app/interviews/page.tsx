import Interview from "@/components/Interview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { interviewData } from "@/utils/interviewData";

const InterviewsPage = () => {
  const pendingData = interviewData.interviews.filter(
    (item) => item.status === "pending"
  );

  const confirmedData = interviewData.interviews.filter(
    (item) => item.status === "confirmed"
  );

  return (
    <div className="my-20">
      <div className="text-center font-medium text-[24px] my-8">
        Interviews Page: {interviewData.interviews.length}
      </div>

      <div>
        {/* tab */}
        <Tabs defaultValue="pending" className="">
          <TabsList className="grid grid-cols-2 justify-center w-full md:w-[400px] bg-[#ebf8ff]">
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
          </TabsList>
          <TabsContent value="pending">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {pendingData?.map((interview) => (
                <Interview interview={interview} key={interview._id} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="confirmed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {confirmedData?.map((interview) => (
                <Interview interview={interview} key={interview._id} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InterviewsPage;
