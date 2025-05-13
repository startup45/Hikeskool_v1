
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  rating?: number;
  duration?: string;
  backgroundColor: string;
  textColor?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  price,
  rating = 4.5,
  duration = "8 weeks",
  backgroundColor,
  textColor = "text-foreground",
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div>
        <AspectRatio ratio={16 / 9}>
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </AspectRatio>
      </div>
      <CardHeader className={`${backgroundColor} ${textColor}`}>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{category}</span>
          <div className="flex items-center">
            <span className="text-sm">⭐ {rating}</span>
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="mb-4 line-clamp-3">{description}</CardDescription>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{duration}</span>
          <span className="font-bold text-foreground">{price}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
