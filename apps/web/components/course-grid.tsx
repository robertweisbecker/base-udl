"use client"

import { useState } from "react"
import { IconChevronDown, IconSchool, IconClock, IconMicrophone, IconCalendarPlus, IconEye, IconShare, IconStar, IconPlayerPlayFilled } from "@tabler/icons-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction
} from "@workspace/ui/components/card"
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@workspace/ui/components/tabs"

/** Avoid `Intl.DurationFormat` (unavailable on older Node) during SSR; short-style-ish labels. */
function formatCourseDuration(hhMm: string): string {
  const [hStr, mStr] = hhMm.split(":")
  const hours = Number(hStr)
  const minutes = Number(mStr)
  if (hours === 0 && minutes === 0) return "0 min"
  const parts: string[] = []
  if (hours > 0) parts.push(`${hours} hr`)
  if (minutes > 0) parts.push(`${minutes} min`)
  return parts.join(" ")
}

const courses = [
  {
    id: 1,
    title: "306: Black History – Continuing the Story™",
    description:
      "(Available in Spanish) This course explores the history and experiences of Black people in the United States, emphasizing the achievements of Black leaders in business...",
    grade: "Grade 8-12",
    duration: "01:15",
    sponsor: "EverFi",
    image: "/placeholder-course-1.jpg",
  },
  {
    id: 2,
    title: "306: Black History™",
    description:
      "(Available in Spanish) This course explores the lives, stories, and lessons of Black Americans throughout history. The curriculum goes beyond just the facts of history, bringing ou...",
    grade: "Grade 8-12",
    duration: "04:15",
    sponsor: "EverFi",
    image: "/placeholder-course-2.jpg",
  },
  {
    id: 3,
    title: "Accounting Careers: Limitless Opportunities™",
    description:
      "(Available in Spanish) This workforce readiness course shows students how an accounting background can help them achieve their career goals. Through interactive real-world...",
    grade: "Grade 9-12",
    duration: "00:20",
    hasSpeaker: true,
    sponsor: "Accounting+",
    image: "/placeholder-course-3.jpg",
  },
  {
    id: 4,
    title: "Financial Literacy: Your Future, Your Money™",
    description:
      "Students learn essential money management skills including budgeting, saving, investing, and understanding credit through engaging interactive scenarios...",
    grade: "Grade 6-10",
    duration: "02:30",
    sponsor: "EverFi",
    image: "/placeholder-course-4.jpg",
  },
  {
    id: 5,
    title: "Digital Citizenship & Cyber Hygiene™",
    description:
      "This course teaches students how to navigate the digital world safely and responsibly. Topics include online privacy, social media safety, and digital footprint awareness...",
    grade: "Grade 6-8",
    duration: "01:45",
    sponsor: "EverFi",
    image: "/placeholder-course-5.jpg",
  },
  {
    id: 6,
    title: "STEM Career Connections™",
    description:
      "Expose students to exciting STEM career paths through interactive modules featuring real professionals. Covers engineering, technology, and applied sciences...",
    grade: "Grade 7-12",
    duration: "00:45",
    hasSpeaker: true,
    sponsor: "Accounting+",
    image: "/placeholder-course-6.jpg",
  },
]

type Course = (typeof courses)[number]

export function CourseGrid() {
  return (
    <div className="flex flex-col gap-8">
      <div className=" px-4 py-4 lg:px-6 flex flex-col gap-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<a href="#">Home</a>} />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-[1fr_auto] gap-2">




          <div>
            <h1 className="text-2xl font-bold tracking-tight">Explore Courses</h1>
            <p className="text-base text-muted-foreground">Find the right course for your students</p>
          </div>


          <div className="flex gap-2">
            <Button variant="neutral">Action 1</Button>
            <Button variant="neutral">Action 2</Button>
            <ButtonGroup>
              <Button>Add…</Button>
              <Button size="icon"><IconChevronDown /></Button>
            </ButtonGroup>
          </div>
        </div>
      </div>


      <Tabs defaultValue="my-courses">
        <div className="border-b px-4 lg:px-6">
          <TabsList variant="line">
            <TabsTrigger value="my-courses">
              My Courses
            </TabsTrigger>
            <TabsTrigger value="browse-all">
              Browse All
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="my-courses">
          <CourseContent courses={courses.slice(0, 3)} count={3} />
        </TabsContent>
        <TabsContent value="browse-all">
          <CourseContent courses={courses} count={courses.length} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CourseContent({
  courses,
  count,
}: {
  courses: Course[]
  count: number
}) {
  return (
    <div className="flex flex-col gap-4 px-4 py-4 lg:px-6 bg-muted">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <FilterDropdown
            label="Grades"
            options={["K-2", "3-5", "6-8", "8-12", "9-12"]}
          />
          <FilterDropdown
            label="Topics"
            options={["Financial Literacy", "STEM", "Digital Citizenship", "Career Readiness", "History & Culture", "Health & Wellness"]}
          />
          <FilterDropdown
            label="Language Options"
            options={["English", "Spanish", "French"]}
          />
        </div>
        <span className="text-sm text-muted-foreground">{count} results</span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:grid-cols-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

function FilterDropdown({
  label,
  options,
}: {
  label: string
  options: string[]
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const activeCount = Object.values(checked).filter(Boolean).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" className="font-normal" />}>
        {label}
        {activeCount > 0 ? (
          <Badge variant="default" className="tabular-nums -me-1">
            {activeCount}
          </Badge>
        )
          : <IconChevronDown data-icon="inline-end" />
        }
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" >
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option}
            checked={!!checked[option]}
            onCheckedChange={(value) =>
              setChecked((prev) => ({ ...prev, [option]: !!value }))
            }
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function CourseCard({
  course,
}: {
  course: Course
}) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardContent>
        <div className="flex size-24 items-center mx-auto justify-center overflow-hidden rounded-full bg-secondary">
          <IconSchool className="size-10" />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>
          {course.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {course.description}
        </CardDescription>
        <CardAction>
          <Button size="icon-sm" variant="outline" className={"rounded-full"}><IconPlayerPlayFilled /></Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <IconSchool className="size-3" />
            {course.grade}
          </span>
          <span className="flex items-center gap-1">
            <IconClock className="size-3" />
            {formatCourseDuration(course.duration)}
          </span>
          {course.hasSpeaker && (
            <Badge variant="secondary">
              <IconMicrophone className="size-3" />
              Speaker
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground">
          <span>Supported by</span>
          <span className="font-semibold text-foreground">{course.sponsor}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t">
        <Button variant="secondary">
          Details
        </Button>
        <ButtonGroup>
          <Button>
            Add
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button size="icon" />}>
              <IconChevronDown data-icon="inline-end" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <IconCalendarPlus />
                Add to My Courses
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconStar />
                Save for Later
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconEye />
                Preview Course
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconShare />
                Share with Colleague
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}
