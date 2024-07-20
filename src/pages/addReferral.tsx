import axios from "@/api/axios";
import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader } from "lucide-react";

interface LoaderData {
  course: string;
  id: string;
}

export async function loader({ params }: any): Promise<LoaderData> {
  return { course: params.course, id: params.id };
}

const AddReferral = () => {
  const { course, id } = useLoaderData() as LoaderData;
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.post("/addReferral", { course, id })
      .then((res) => {
        if (res.data.success) {
          toast.success("Referral added");
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Error adding referral, try again");
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [course, id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <Loader className="animate-spin" size={50} />
          <p className="mt-4 text-gray-700">Processing your referral...</p>
        </div>
      ) : (
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="text-xl font-semibold">Referral Details</h2>
          <p className="mt-2">Course: {course}</p>
          <p>ID: {id}</p>
        </div>
      )}
    </div>
  );
};

export default AddReferral;
