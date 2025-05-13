
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import WhatsAppChat from "@/components/WhatsAppChat";

const ApplyMentor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here
    alert("Application submitted successfully! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-28 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Expert <span className="text-blue-500">Mentor Team</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
              Share your expertise, inspire the next generation, and grow your professional network while earning additional income.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Become a HikeSkool Mentor?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-3 rounded-full h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <circle cx="12" cy="8" r="5" />
                      <path d="M20 21a8 8 0 0 0-16 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Share Your Expertise</h3>
                    <p className="text-gray-600">Help students learn practical skills and grow in their careers while reinforcing your own knowledge.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-green-100 p-3 rounded-full h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Income</h3>
                    <p className="text-gray-600">Earn competitive compensation on your own schedule based on courses and students you mentor.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-pink-100 p-3 rounded-full h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
                      <path d="M17 6.1H3a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8.9a3 3 0 0 0-3-3Z" />
                      <path d="M10 3 7 6.1h10L14 3h-4Z" />
                      <rect width="5" height="5" x="5" y="10" rx="1" />
                      <path d="M14 13h2" />
                      <path d="M14 17h2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Grow Your Network</h3>
                    <p className="text-gray-600">Connect with students, other instructors, and industry professionals to expand your professional network.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">Mentor Application</CardTitle>
                  <CardDescription>
                    Fill out the form below to apply as a mentor. We'll review your application and contact you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                        <Input 
                          id="firstName"
                          placeholder="Your first name" 
                          {...register("firstName", { required: true })}
                          className={errors.firstName ? "border-red-500" : ""}
                        />
                        {errors.firstName && <p className="text-red-500 text-xs">This field is required</p>}
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                        <Input 
                          id="lastName"
                          placeholder="Your last name" 
                          {...register("lastName", { required: true })}
                          className={errors.lastName ? "border-red-500" : ""}
                        />
                        {errors.lastName && <p className="text-red-500 text-xs">This field is required</p>}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="you@example.com" 
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-xs">Valid email is required</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="expertise" className="text-sm font-medium">Area of Expertise</label>
                      <Tabs defaultValue="finance">
                        <TabsList className="grid grid-cols-3 md:grid-cols-6">
                          <TabsTrigger value="finance">Finance</TabsTrigger>
                          <TabsTrigger value="tech">Tech</TabsTrigger>
                          <TabsTrigger value="cybersecurity">Cyber</TabsTrigger>
                          <TabsTrigger value="commerce">Commerce</TabsTrigger>
                          <TabsTrigger value="marketing">Marketing</TabsTrigger>
                          <TabsTrigger value="aiml">AI/ML</TabsTrigger>
                        </TabsList>
                        <input 
                          type="hidden" 
                          {...register("expertise", { required: true })}
                        />
                      </Tabs>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-sm font-medium">Years of Experience</label>
                      <Input 
                        id="experience"
                        type="number" 
                        placeholder="5" 
                        {...register("experience", { required: true, min: 1 })}
                        className={errors.experience ? "border-red-500" : ""}
                      />
                      {errors.experience && <p className="text-red-500 text-xs">Experience is required</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="bio" className="text-sm font-medium">Professional Bio</label>
                      <Textarea 
                        id="bio"
                        placeholder="Tell us about your professional background, teaching experience, and why you want to be a mentor." 
                        className={`min-h-[120px] ${errors.bio ? "border-red-500" : ""}`}
                        {...register("bio", { required: true, minLength: 100 })}
                      />
                      {errors.bio && <p className="text-red-500 text-xs">Bio with at least 100 characters is required</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn Profile URL (optional)</label>
                      <Input 
                        id="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile" 
                        {...register("linkedin")}
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleSubmit(onSubmit)} className="w-full bg-blue-500 hover:bg-blue-600">Submit Application</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What qualifications do I need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We look for mentors with at least 3+ years of professional experience in their field, 
                  strong communication skills, and a passion for teaching. Advanced degrees or certifications are a plus.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How much time do I need to commit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our mentors typically dedicate 5-10 hours per week depending on your availability. 
                  You can choose to mentor multiple courses or focus on just one specialty area.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How does payment work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Mentors are paid based on a combination of course enrollments, student ratings, and hours of engagement. 
                  Payments are processed monthly with competitive industry rates.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What support will I receive?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide comprehensive onboarding, training materials, teaching resources, and ongoing support from 
                  our education team to help you succeed as a mentor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default ApplyMentor;
